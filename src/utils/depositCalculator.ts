export const depositCalculator = (deposit: number, remained: number) => {
  let gone_percent = (remained / deposit) * 100;
  return gone_percent;
};
