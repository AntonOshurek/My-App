export function getTimeAdvice(): string {
  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour >= 6 && currentHour < 12) {
    return "Good morning! It's a great time to start your day!";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon! Time for a lunch break and some fresh air!";
  } else if (currentHour >= 18 && currentHour < 22) {
    return "Good evening! Perfect time for a relaxing activity!";
  } else {
    return "Good night! Time to rest and recharge for tomorrow!";
  }
};
