<script>
function check(input){
  if (input.value !=document.getElementById('email_addr').value){
    input.className="error";
    alert("Must match!");
  }
} </script>
