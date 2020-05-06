import React from 'react'
import './Login.css';
const SignUP=()=>{


return(
    <>
    <div class="container mt-5">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header mt-1">
				<h3>Sign UP</h3>
				
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group mt-2">
						
						<input type="text" class="form-control" placeholder="Firstname"/>
						
					</div>
                    <div class="input-group form-group mt-2">
						
						<input type="text" class="form-control" placeholder="Lastname"/>
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password"/>
					</div>
                    <div class="input-group form-group">
						
						<input type="password" class="form-control" placeholder="Conform password"/>
					</div>
                    <div class="input-group form-group mt-2">
						
						<input type="email" class="form-control" placeholder="Email Id"/>
						
					</div>
                    <div class="input-group form-group mt-2">
						
						<input type="tel" class="form-control" placeholder="Mobile number"/>
						
					</div>

					<div class="row float-right mr-3">
						<button class="btn btn-warning  btn-large">SignUP</button>
					</div>
                   
					
				</form>
			</div>
			
		</div>
	</div>
</div>
</>
)
}
export default SignUP;