export const TODO_PENDING = 'utils/status/TODO_PENDING';
export const TODO_IN_PROGRESS = 'utils/status/TODO_IN_PROGRESS';
export const TODO_DONE = 'utils/status/TODO_DONE';

const statusMap = {
  [TODO_PENDING]: TODO_IN_PROGRESS,
  [TODO_IN_PROGRESS]: TODO_DONE,
  [TODO_DONE]: TODO_PENDING
};

export function nextStatus(currentStatus) {
  return statusMap[currentStatus];
}