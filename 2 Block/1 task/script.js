document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var data = {};
    formData.forEach(function(value, key) {
      data[key] = value;
    });

    localStorage.setItem('surveyResults', JSON.stringify(data));
    alert('Результати опитування успішно збережені.');
  });

  function filterByFaculty(faculty) {
    var results = JSON.parse(localStorage.getItem('surveyResults'));
    return results.filter(function(result) {
      return result.faculty === faculty;
    });
  }
  
  function filterByInterviewTime(date, time) {
    var results = JSON.parse(localStorage.getItem('surveyResults'));
    return results.filter(function(result) {
      return result.interviewDate === date && result.interviewTime === time;
    });
  }
  
  function filterByAverageScore(min, max) {
    var results = JSON.parse(localStorage.getItem('surveyResults'));
    return results.filter(function(result) {
      return result.averageScore >= min && result.averageScore <= max;
    });
  }
  