
    // Task 6: Detect Key Pressed
    document.getElementById('detectKey').addEventListener('keydown', function(event) {
      alert(`You pressed: ${event.key}`);
    });

    // Task 7: Count Characters
    const charCountInput = document.getElementById('charCount');
    const charCountOutput = document.getElementById('charCountOutput');
    charCountInput.addEventListener('input', function() {
      charCountOutput.textContent = `Characters: ${charCountInput.value.length}`;
    });

    // Task 8: Live Input Preview
    const livePreviewInput = document.getElementById('livePreview');
    const previewOutput = document.getElementById('previewOutput');
    livePreviewInput.addEventListener('input', function() {
      previewOutput.textContent = `Preview: ${livePreviewInput.value}`;
    });

    // Task 9: Disable Enter Key
    document.getElementById('disableEnter').addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        alert('Enter key is disabled!');
      }
    });

    // Task 10: Auto Convert to Uppercase
    const autoUppercaseInput = document.getElementById('autoUppercase');
    autoUppercaseInput.addEventListener('input', function() {
      autoUppercaseInput.value = autoUppercaseInput.value.toUpperCase();
    });