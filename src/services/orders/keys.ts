/* eslint-disable @typescript-eslint/no-explicit-any */

export const ORDER_KEYS = {
  root: () => ['ORDER'],
  list: (args?: any) => [...ORDER_KEYS.root(), 'LIST', { ...(args || {}) }],
  detail: (args?: any) => [...ORDER_KEYS.root(), 'DETAIL', { ...(args || {}) }],
  historyLog: (args?: any) => [...ORDER_KEYS.root(), 'HISTORY_LOG', { ...(args || {}) }],
  invoice: (args?: any) => [...ORDER_KEYS.root(), 'INVOICE', { ...(args || {}) }],
  voucers: (args?: any) => [...ORDER_KEYS.root(), 'VOUCERS', { ...(args || {}) }],
};
