type ReportProps = {
  report: string
}

const Report = ({ report }: ReportProps) => {
  return (
    <div className='d-flex alert alert-danger justify-content-center mt-5'>
      <h3>Report: {report}</h3>
    </div>
  )
}

export default Report
