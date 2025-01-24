// Load data from JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Update dashboard with data
        updateDashboard(data);
    })
    .catch(error => console.error('Error loading data:', error));

document.addEventListener("DOMContentLoaded", () => {
    const periods = document.querySelectorAll(".profile li");
    const data = {
        daily: { work: "5hrs", play: "2hrs", study: "1hr", exercise: "1hr", social: "2hrs", selfcare: "1hr" },
        weekly: { work: "32hrs", play: "10hrs", study: "4hrs", exercise: "4hrs", social: "5hrs", selfcare: "2hrs" },
        monthly: { work: "128hrs", play: "40hrs", study: "16hrs", exercise: "16hrs", social: "20hrs", selfcare: "8hrs" }
    };

    periods.forEach(period => {
        period.addEventListener("click", () => {
            document.querySelector(".active").classList.remove("active");
            period.classList.add("active");

            const selectedPeriod = period.textContent.toLowerCase();
            updateDashboard(data[selectedPeriod]);
        });
    });

    function updateDashboard(newData) {
        document.querySelector(".work p").textContent = newData.work;
        document.querySelector(".play p").textContent = newData.play;
        document.querySelector(".study p").textContent = newData.study;
        document.querySelector(".exercise p").textContent = newData.exercise;
        document.querySelector(".social p").textContent = newData.social;
        document.querySelector(".selfcare p").textContent = newData.selfcare;
    }
});
