
const Home = () => {

  return (<>

      {/* <h1>Home🏠</h1> */}
      <style>
        {`
          body {
            background: url(../images/1.png) no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
          }
        `}
      </style>
      <script>
        {`
          var images = [
            '../images/1.png',
            '../images/2.png',
            '../images/3.png',
            '../images/4.png',
            '../images/5.png',
            '../images/6.png',
          ];
          var i = 0;
          setInterval(function() {
            document.body.style.background = "url('" + images[i++] + "')";
            if (i >= images.length) {
              i = 0;
            }
          }, 5000);
        `}
      </script>
      {/* <video width="320" height="240" controls style={{ display: 'block', margin: '25 auto' }}>
        <source src="../vidyo/1.mp4" type="video/mp4" />
      </video> */}

  </>)
/******  1a42b202-a12e-4c8c-ae21-069db96241fd  *******/

}

export default Home