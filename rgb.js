let intervalId = null;

    const changeBackgroundColor = () => {
      const red = Math.floor(Math.random() * 126);
      const green = Math.floor(Math.random() * 126);
      const blue = Math.floor(Math.random() * 126);
      const rgb = `rgb(${red}, ${green}, ${blue})`; // Corrected the syntax here
      document.body.style.background = rgb;
    };

    function start() {
      intervalId = setInterval(changeBackgroundColor, 1000);
    }
    const button1 = document.querySelector('#btn1');
    button1.addEventListener('click', event => {
      document.body.style.background = `rgb(255,255,255)`;
      clearInterval(intervalId);
    });

    const button2 = document.querySelector('#btn2');
    button2.addEventListener('click', event => {
      document.body.style.background = `rgb(255,255,255)`; // Set the background to white
      clearInterval(intervalId); // Clear the previous interval
      start();
    });