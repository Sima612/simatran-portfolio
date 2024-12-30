document.addEventListener("DOMContentLoaded", function () {
  const timelineData = [
    {
      date: "October 2023 - Present",
      title: "YSI DIAMOND, Production Specialist",
      description:
        "Experienced professional adept at optimizing production flow and ensuring operational efficiency across diverse merchandise categories. Committed to upholding exceptional service standards and prioritizing guest satisfaction as a cornerstone of business success. Proven track record of driving sales growth through meticulous monitoring and reporting, as well as effective collaboration to enhance the overall customer experience.",
    },
    {
      date: "January 2019 - July 2019",
      title: "LA FITNESS, Personal Trainer",
      description:
        "Dedicated professional with a demonstrated ability to cultivate and sustain strong client relationships through personalized training sessions spanning 30 minutes to one hour. Achieved an outstanding 90% client retention rate from January 2019 to July 2019. Proficient in guiding clients to execute corrective exercises and techniques with precision, mitigating the risk of injuries and maximizing performance outcomes. Regularly conducted comprehensive follow-up assessments to monitor progress, identify areas for enhancement, and inspire adherence to training protocols.",
    },
    {
      date: "January 2019 - May 2019",
      title: "EXOS, Performance Specialist Intern",
      description:
        "Engaged in hands-on learning of Functional Movement Screen and Performance Qualification testing protocols for athletes, fostering a deep understanding of assessment methodologies. Supported coaches in supervising and guiding groups of athletes, ranging from individual sessions to larger groups exceeding 12 members, emphasizing corrective techniques to mitigate injury risks. Provided exemplary demonstrations of correct form and technique for corrective exercises, facilitating performance enhancements for athletes. Collaborated closely with coaching staff to organize training environments, select suitable equipment tailored to athletes' sports and daily training objectives, and maintain cleanliness and orderliness post-session.",
    },
  ];

  const timeline = document.getElementById("timeline");

  timelineData.forEach((item, index) => {
    let entry = document.createElement("div");
    entry.classList.add("timeline-entry");
    entry.setAttribute("id", "entry-" + index);

    let dot = document.createElement("div");
    dot.classList.add("timeline-dot");

    let date = document.createElement("div");
    date.textContent = item.date;
    date.classList.add("timeline-date");

    let content = document.createElement("div");
    content.classList.add("timeline-content");
    content.setAttribute("id", "content-" + index);

    let title = document.createElement("h3");
    title.textContent = item.title;

    let description = document.createElement("p");
    description.textContent = item.description;
    description.style.display = "none"; // Initially hide the description

    // Click event to toggle the description visibility
    entry.addEventListener("click", function () {
      description.style.display =
        description.style.display === "none" ? "block" : "none";
    });

    content.appendChild(title);
    content.appendChild(description);

    entry.appendChild(dot);
    entry.appendChild(date);
    entry.appendChild(content);

    timeline.appendChild(entry);
  });
});
