function showPlan(plan) {
  var plans = document.getElementsByClassName("floor-plan");
  for (var i = 0; i < plans.length; i++) {
    plans[i].style.display = "none";
  }
  document.getElementById("plan-" + plan).style.display = "block";
}

// Show the default plan on page load
document.addEventListener("DOMContentLoaded", function () {
  showPlan("600");
});

// function showPlan(planId) {
//     // Hide all floor plans
//     var plans = document.querySelectorAll('.floor-plan');
//     plans.forEach(function(plan) {
//       plan.style.display = 'none';
//     });

//     // Show the selected floor plan
//     var selectedPlan = document.getElementById('plan-' + planId);
//     if (selectedPlan) {
//       selectedPlan.style.display = 'block';
//     }
//   }
