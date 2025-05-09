$(document).ready(function () {
    handleSubmission();
    applyFilter();
    $("#review-filter").on("change", applyFilter);
    $("#userInput").on("input", function () {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    });
});

function handleSubmission() {
    const storedReviews = JSON.parse(localStorage.getItem("cadburyReviews") || "[]");
    storedReviews.forEach(addReviewToPage);

    $("#submitBtn").on("click", function () {
        const reviewText = $("#userInput").val().trim();
        const selectedActivity = $("#activitySelect").val();

        if (!selectedActivity & !reviewText) {
            alert("Please fill in both fields before submitting.");
            return;
        }

        if (!reviewText) {
            alert("Please enter a review before submitting.");
            return;
        }

        if (!selectedActivity) {
            alert("Please select the activity you are reviewing.");
            return;
        }

        const newReview = {
            activity: selectedActivity,
            text: reviewText,
            timestamp: new Date().toLocaleString()
        };

        storedReviews.push(newReview);
        localStorage.setItem("cadburyReviews", JSON.stringify(storedReviews));

        $("#userInput").val("");
        $("#activitySelect").val("");

        applyFilter();

        setTimeout(() => {
            alert("Review submitted successfully!");}, 200);
    });
}

function applyFilter() {
    const selected = $("#review-filter").val();
    const allReviews = JSON.parse(localStorage.getItem("cadburyReviews") || "[]");
    const filtered = selected ? allReviews.filter(r => r.activity === selected) : allReviews;

    $("#reviewList").empty();
    
    if (filtered.length === 0) {
        $("#reviewList").append(
            $("<div>").text("No reviews yet.").css("color", "grey")
        );
    } else {
        filtered.forEach(addReviewToPage);
    };
}

function addReviewToPage(review) {
    const reviewDiv = $("<div>").addClass("user-review").html(
        `<strong>"${review.text}"</strong> (${review.activity}) - ${review.timestamp}`
    );    
    $("#reviewList").append(reviewDiv);
}
