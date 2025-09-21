// 📘 دروس
function showLessons(subject) {
  const container = document.getElementById("lessons-container");
  let content = "";

  if (subject === "litterature") {
    content = "<h3>أدب فرنسي</h3><ul><li>محاضرة 1</li><li>محاضرة 2</li></ul>";
  } else if (subject === "linguistique") {
    content = "<h3>لسانيات</h3><ul><li>محاضرة 1</li><li>محاضرة 2</li></ul>";
  } else if (subject === "traduction") {
    content = "<h3>ترجمة</h3><ul><li>محاضرة 1</li><li>محاضرة 2</li></ul>";
  }

  container.innerHTML = content;
}

// 📅 جداول
function showTimetable(group) {
  const container = document.getElementById("timetable-container");
  container.innerHTML = `<h3>جدول المجموعة ${group}</h3>
    <table border="1" cellpadding="5">
      <tr><th>اليوم</th><th>المادة</th></tr>
      <tr><td>الأحد</td><td>أدب</td></tr>
      <tr><td>الإثنين</td><td>لسانيات</td></tr>
      <tr><td>الثلاثاء</td><td>ترجمة</td></tr>
    </table>`;
}

// 🌐 ترجمة (محاكاة بسيطة بدون API)
function translateText() {
  let input = document.getElementById("inputText").value;
  let output = document.getElementById("outputText");
  if (!input.trim()) {
    output.innerHTML = "<p>⚠️ الرجاء إدخال نص للترجمة</p>";
  } else {
    // هذا مجرد مثال - يمكنك لاحقًا ربط Google Translate API
    output.innerHTML = "<p><b>ترجمة (تجريبية):</b> " + input.split("").reverse().join("") + "</p>";
  }
}
