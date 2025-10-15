function isLeapYear(year) {
  if ((year % 400) === 0) return true;
  if ((year % 100) === 0) return false;
  if ((year % 4) === 0) return true;
  return false;
}

function calculateDaysToNewYear(day, month, year) {
  const inputDate = new Date(year, month - 1, day);
  const newYearDate = new Date(year, 11, 31);
  const diff = newYearDate.getTime() - inputDate.getTime();
  const oneDayMs = 24 * 60 * 60 * 1000;
  return Math.ceil(diff / oneDayMs);
}

function calculate() {
  const input = document.getElementById('dateInput').value.trim();
  const daysLeftDiv = document.getElementById('daysLeft');
  const leapYearDiv = document.getElementById('leapYearInfo');

  const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
  const match = input.match(regex);

  if (!match) {
    daysLeftDiv.textContent = 'Ошибка: введите дату в формате дд.мм.гггг';
    leapYearDiv.textContent = '';
    return;
  }

  const day = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const year = parseInt(match[3], 10);

  const dateObj = new Date(year, month - 1, day);
  if (
    dateObj.getFullYear() !== year ||
    dateObj.getMonth() + 1 !== month ||
    dateObj.getDate() !== day
  ) {
    daysLeftDiv.textContent = 'Ошибка: введена некорректная дата';
    leapYearDiv.textContent = '';
    return;
  }

  const daysToNY = calculateDaysToNewYear(day, month, year);
  daysLeftDiv.textContent = `До нового года осталось: ${daysToNY} день`;

  leapYearDiv.textContent = `Год ${year} — ${isLeapYear(year) ? 'високосный' : 'не високосный'}`;
}
