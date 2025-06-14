// Sample doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "Dermatologist",
    rating: 4.9,
    location: "Delhi",
    experience: "8+ years",
    fees: 600,
    languages: ["English", "Hindi"],
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Dr. Ankit Verma",
    specialty: "Cardiologist",
    rating: 4.7,
    location: "Mumbai",
    experience: "12+ years",
    fees: 800,
    languages: ["English", "Marathi", "Hindi"],
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Dr. Neha Gupta",
    specialty: "Pediatrician",
    rating: 4.8,
    location: "Bangalore",
    experience: "6+ years",
    fees: 500,
    languages: ["English", "Kannada", "Hindi"],
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  {
    id: 4,
    name: "Dr. Rohit Mehta",
    specialty: "Orthopedic Surgeon",
    rating: 4.6,
    location: "Hyderabad",
    experience: "10+ years",
    fees: 750,
    languages: ["English", "Telugu", "Hindi"],
    image: "https://randomuser.me/api/portraits/men/35.jpg"
  },
  {
    id: 5,
    name: "Dr. Alka Joshi",
    specialty: "Gynecologist",
    rating: 4.9,
    location: "Pune",
    experience: "11+ years",
    fees: 650,
    languages: ["English", "Marathi", "Hindi"],
    image: "https://randomuser.me/api/portraits/women/49.jpg"
  },
  {
    id: 6,
    name: "Dr. Karan Batra",
    specialty: "Neurologist",
    rating: 4.5,
    location: "Chennai",
    experience: "9+ years",
    fees: 850,
    languages: ["English", "Tamil", "Hindi"],
    image: "https://randomuser.me/api/portraits/men/37.jpg"
  },
  {
    id: 7,
    name: "Dr. Sneha Desai",
    specialty: "ENT Specialist",
    rating: 4.3,
    location: "Ahmedabad",
    experience: "7+ years",
    fees: 550,
    languages: ["English", "Gujarati", "Hindi"],
    image: "https://randomuser.me/api/portraits/women/51.jpg"

  },
  {
    id: 8,
    name: "Dr. Arjun Sinha",
    specialty: "Psychiatrist",
    rating: 4.8,
    location: "Lucknow",
    experience: "13+ years",
    fees: 900,
    languages: ["English", "Hindi"],
    image: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  {
    id: 9,
    name: "Dr. Isha Raj",
    specialty: "General Physician",
    rating: 4.4,
    location: "Kolkata",
    experience: "5+ years",
    fees: 400,
    languages: ["English", "Bengali", "Hindi"],
    image: "https://randomuser.me/api/portraits/women/56.jpg"

  },
  {
    id: 10,
    name: "Dr. Nikhil Rana",
    specialty: "Urologist",
    rating: 4.6,
    location: "Jaipur",
    experience: "10+ years",
    fees: 700,
    languages: ["English", "Hindi"],
    image: "https://randomuser.me/api/portraits/men/57.jpg"
  },
  {
    id: 11,
    name: "Dr. Ritu Jain",
    specialty: "Oncologist",
    rating: 4.7,
    location: "Chandigarh",
    experience: "14+ years",
    fees: 1000,
    languages: ["English", "Punjabi", "Hindi"],
    image: "https://randomuser.me/api/portraits/women/89.jpg"

  },
  {
    id: 12,
    name: "Dr. Aditya Kapoor",
    specialty: "Ophthalmologist",
    rating: 4.5,
    location: "Bhopal",
    experience: "6+ years",
    fees: 500,
    languages: ["English", "Hindi"],
    image: "https://randomuser.me/api/portraits/men/33.jpg"
  }
];


// Render doctor cards on index.html
if (document.getElementById("doctor-list")) {
  const container = document.getElementById("doctor-list");
  doctors.forEach(doc => {
    container.innerHTML += `
      <div class="col-md-6 mb-4">
  <div class="card shadow-sm h-100 p-3">
    <div class="d-flex align-items-center justify-content-between">
      
      <!-- Left side: Doctor info -->
      <div>
        <h5 class="card-title mb-1"><i class="fa-solid fa-user-doctor me-2"></i>${doc.name}</h5>
        <p class="card-text mb-1"><strong>Specialty:</strong> ${doc.specialty}</p>
        <p class="card-text mb-1"><strong>Rating:</strong> ⭐ ${doc.rating}</p>
        <p class="card-text mb-1"><strong>Experience:</strong> ${doc.experience}</p>
        <p class="card-text mb-1"><strong>Fees:</strong> ₹${doc.fees}</p>
        <p class="card-text mb-1"><strong>Languages:</strong> ${doc.languages.join(", ")}</p>
        <a href="doctor.html?id=${doc.id}" class="btn btn-primary mt-2">Book Now</a>
      </div>

      <!-- Right side: Image -->
      <img src="${doc.image}" alt="${doc.name}" class="rounded-circle ms-3" style="width: 100px; height: 100px; object-fit: cover;">
      
    </div>
  </div>
</div>

    `;
  });
}
function renderDoctors(filteredDoctors) {
  const container = document.getElementById("doctor-list");
  container.innerHTML = ""; // clear previous

  filteredDoctors.forEach(doc => {
    container.innerHTML += `
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm h-100 p-3">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <h5 class="card-title mb-1">${doc.name}</h5>
              <p class="card-text mb-1"><strong>Specialty:</strong> ${doc.specialty}</p>
              <p class="card-text mb-1"><strong>Location:</strong> ${doc.location}</p>
              <p class="card-text mb-1"><strong>Experience:</strong> ${doc.experience}</p>
              <p class="card-text mb-1"><strong>Fees:</strong> ₹${doc.fees}</p>
              <p class="card-text mb-1"><strong>Languages:</strong> ${doc.languages.join(", ")}</p>
              <a href="doctor.html?id=${doc.id}" class="btn btn-primary mt-2">Book Now</a>
            </div>
            <img src="${doc.image}" alt="${doc.name}" class="rounded-circle ms-3" style="width: 100px; height: 100px; object-fit: cover;">
          </div>
        </div>
      </div>
    `;
  });
}

// Initial render
renderDoctors(doctors);

// Filter on input
document.getElementById("search-input").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = doctors.filter(doc =>
    doc.name.toLowerCase().includes(query) ||
    doc.specialty.toLowerCase().includes(query) ||
    doc.location.toLowerCase().includes(query)
  );
  renderDoctors(filtered);
});

localStorage.setItem("doctors", JSON.stringify(doctors));
// On doctor.html booking
document.getElementById("booking-form").addEventListener("submit", function (e) {
  const selectedDate = new Date(document.getElementById("appointment-date").value);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  selectedDate.setHours(0, 0, 0, 0);

  if (selectedDate < now) {
    e.preventDefault();
    alert("Please select a valid appointment date (today or later).");
    return;
  }

  // your existing booking code here...
});


// On confirmation.html

container.classList.add("fade-in");


