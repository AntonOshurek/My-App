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

export function getHourlyAdvice(): string {
  const now = new Date();
  const currentHour = now.getHours();

  switch(currentHour) {
    case 0:
      return "It's midnight! Time to get some rest and prepare for a new day!";
    case 1:
      return "It's 1 AM! Time to sleep and let your body recharge!";
    case 2:
      return "It's 2 AM! Ensure you get enough rest to start tomorrow with energy!";
    case 3:
      return "It's 3 AM! Make sure you get enough sleep to stay productive!";
    case 4:
      return "It's 4 AM! Early bird catches the worm! Start your day with a healthy habit!";
    case 5:
      return "It's 5 AM! It's a great time to meditate or practice yoga!";
    case 6:
      return "It's 6 AM! Enjoy a cup of coffee and plan your day!";
    case 7:
      return "It's 7 AM! Time to start your day with a healthy breakfast!";
    case 8:
      return "It's 8 AM! Time to hit the gym and get your blood pumping!";
    case 9:
      return "It's 9 AM! The early bird gets the worm! Keep up the good work!";
    case 10:
      return "It's 10 AM! Time for a mid-morning break and a healthy snack!";
    case 11:
      return "It's 11 AM! Time to focus and be productive!";
    case 12:
      return "It's noon! Time to take a lunch break and recharge!";
    case 13:
      return "It's 1 PM! Time to get back to work!";
    case 14:
      return "It's 2 PM! Stay hydrated and keep your energy levels high!";
    case 15:
      return "It's 3 PM! Take a quick break and stretch your legs!";
    case 16:
      return "It's 4 PM! Keep pushing! The finish line is in sight!";
    case 17:
      return "It's 5 PM! Time to wrap up and call it a day!";
    case 18:
      return "It's 6 PM! Enjoy some downtime and do something you love!";
    case 19:
      return "It's 7 PM! Spend some quality time with your loved ones!";
    case 20:
      return "It's 8 PM! Time to wind down and relax after a busy day!";
    case 21:
      return "It's 9 PM! Get ready for a good night's sleep!";
    case 22:
      return "It's 10 PM! Ensure you get enough rest for a productive day tomorrow!";
    case 23:
      return "It's 11 PM! Time to get some sleep and recharge!";
    default:
      return "Oops! Something went wrong. Please try again later.";
  }
}
