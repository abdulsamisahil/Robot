type ReportProps = {
  report: string
  alert: boolean
}

const Report = ({ report, alert }: ReportProps) => {
  return (
    <div
      className={`d-flex alert ${
        alert ? `alert-danger` : `alert-success`
      } justify-content-center mt-5`}
    >
      <h3>Report: {report}</h3>
    </div>
  )
}

export default Report
