approvedLeaves = [
  { emp_id: 1, leaveFrom: 14 - 12 - 2020, leaveUpto: 18 - 12 - 2020 },
  { emp_id: 3, leaveFrom: 22 - 12 - 2020, leaveUpto: 24 - 12 - 2020 },
  { emp_id: 7, leaveFrom: 27 - 12 - 2020, leaveUpto: 30 - 12 - 2020 },
  { emp_id: 29, leaveFrom: 02 - 12 - 2020, leaveUpto: 10 - 12 - 2020 },
  { emp_id: 45, leaveFrom: 24 - 02 - 2021, leaveUpto: 17 - 03 - 2021 },
];
requestedLeave = [
  { leaveFrom: 19 - 12 - 2020, leaveUpto: 20 - 12 - 2020 },
  { leaveFrom: 16 - 12 - 2020, leaveUpto: 19 - 12 - 2020 },
  { leaveFrom: 19 - 12 - 2020, leaveUpto: 23 - 12 - 2020 },
  { leaveFrom: 03 - 12 - 2020, leaveUpto: 08 - 12 - 2020 },
  { leaveFrom: 19 - 12 - 2020, leaveUpto: 21 - 12 - 2020 },
  { leaveFrom: 19 - 12 - 2020, leaveUpto: 21 - 12 - 2020 },
];

requestedLeave.forEach(
  element,
  isSlotAvailable(element.leaveFrom, element.leaveUpto)
);

isSlotAvailable = (approvedLeaves, requestedLeave) => {
  let flag = 0;
  approvedLeaves.forEach((leave) => {
    if (
      approvedLeaves >= leave.leaveFrom ||
      requestedLeave <= leave.leaveUpto
    ) {
      console.log("false");
    } else {
      console.log("true");
    }
  });
};
