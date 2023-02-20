import express, { Request, Response } from "express"

import { body, validationResult, oneOf } from "express-validator"

import { Robot } from "../src/Robot"

const router = express.Router()

router.post(
  "/",
  isPositionValid("position").map((validator) =>
    validator.withMessage("X and Y must be numbers")
  ),

  body("position.direction")
    .isIn(["N", "S", "E", "W"])
    .withMessage("Direction must be N | E | S | W"),

  isPositionValid("grid").map((validator) =>
    validator.withMessage(
      "Room x and y must be greater than position x and y, and must be numbers "
    )
  ),
  oneOf(
    [
      body("commands").custom((commands: string) => {
        for (const command of commands) {
          const isValid = command === "L" || command === "R" || command === "F"

          if (!isValid) {
            return false
          }
        }
        return true
      }),
      body("commands").isEmpty(),
    ],
    "Commands must be R | L | F"
  ),
  (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { position, grid, commands } = req.body

    const robot = new Robot({ grid, position })

    robot.runCommands(commands)

    res.json({ Report: robot.toString() })
  }
)

router.get("/get", (req: Request, res: Response) => {
  res.send("Robot working")
})

function isPositionValid(field: string) {
  return [
    body(field).isObject(),
    body(`${field}.x`).isNumeric().toInt(),
    body(`${field}.y`).isNumeric().toInt(),
  ]
}

module.exports = router
