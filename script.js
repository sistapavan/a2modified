function startRegistration() {
    // Prompt the user for inputs
    let studentType = prompt("Enter student type: (b for Bachelor, m for Master)");
    if (studentType !== 'b' && studentType !== 'm') {
      alert("Invalid student type. Please enter 'b' for Bachelor or 'm' for Master.");
      return;
    }
  
    let residency = prompt("Enter residency: (i for In-State, o for Out-State)");
    if (residency !== 'i' && residency !== 'o') {
      alert("Invalid residency. Please enter 'i' for In-State or 'o' for Out-State.");
      return;
    }
  
    let credits = prompt("Enter the number of credits:");
    if (credits === null || credits === "" || isNaN(credits) || parseInt(credits) <= 0) {
      alert("Valid number of credits is required.");
      return;
    }
    credits = parseInt(credits);
  
    // Calculate registration fee and tuition rate based on input
    let registrationFee = 0;
    let tuitionRate = 0;
  
    if (studentType === 'b' && residency === 'i') {
      registrationFee = 200;
      tuitionRate = 350;
    } else if (studentType === 'b' && residency === 'o') {
      registrationFee = 600;
      tuitionRate = 700;
    } else if (studentType === 'm' && residency === 'i') {
      registrationFee = 300;
      tuitionRate = 450;
    } else if (studentType === 'm' && residency === 'o') {
      registrationFee = 900;
      tuitionRate = 900;
    }
  
    const tuitionFee = tuitionRate * credits;
    const totalFee = registrationFee + tuitionFee;
  
    // Display the results
    document.getElementById('registrationFee').innerText = registrationFee.toFixed(2);
    document.getElementById('tuitionRate').innerText = tuitionRate.toFixed(2);
    document.getElementById('tuitionFee').innerText = tuitionFee.toFixed(2);
    document.getElementById('totalFee').innerText = totalFee.toFixed(2);
  
    document.getElementById('output').style.display = 'block';
  }
  