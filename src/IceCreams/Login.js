import React from 'react'
import './Login.css';
const Login=()=>{


return(
    <>
    <div class="container mt-5">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header mt-1">
				<h3>Log In</h3>
				
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group mt-2">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="username"/>
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password"/>
					</div>
					<div class="row float-right mr-3">
						<button class="btn btn-warning  btn-large">Login</button>
					</div>
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right"/>
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
</>
)
}
export default Login;