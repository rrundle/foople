const daysLeftInTrial = (startTime) => {
  const timeDifferenceDays = (Date.now() - startTime) / 1000 / 86400
  console.log('timeDifferenceDays: ', timeDifferenceDays)
  if (timeDifferenceDays > 30) return 0
  console.log(
    '30 - parseInt(timeDifferenceDays): ',
    30 - parseInt(timeDifferenceDays),
  )
  return 30 - parseInt(timeDifferenceDays)
}

module.exports = {
  daysLeftInTrial,
}
