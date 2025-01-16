/* eslint-disable @typescript-eslint/no-explicit-any */

export const ORDER_KEYS = {
  root: () => ['ORDER'],
  list: (args?: object) => [...ORDER_KEYS.root(), 'LIST', { ...(args || {}) }],
  detail: (args?: object) => [...ORDER_KEYS.root(), 'DETAIL', { ...(args || {}) }],
  historyLog: (args?: object) => [...ORDER_KEYS.root(), 'HISTORY_LOG', { ...(args || {}) }],
  invoice: (args?: object) => [...ORDER_KEYS.root(), 'INVOICE', { ...(args || {}) }],
  voucers: (args?: object) => [...ORDER_KEYS.root(), 'VOUCERS', { ...(args || {}) }],
};
