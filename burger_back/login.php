<?php require "header.php" ?>
<?php require "function.php"; ?>
<body class="bg-secondary">
    <div class="container-fluid background">
      <div class="offset-md-3 col-md-6">
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="h1" style="font-size: 500%">Menu Administrateur</p>
          </div>
        </div>
        <div class="form-group">
        	<div class="row">
        		<div class="offset-md-2 col-md-2">
        			<label>Login</label>
        		</div>
        		<div class="col-md-3">
        			<input type="text" name="login" id="login">
        		</div>			
        	</div>
        	<div class="row">
        		<div class="offset-md-2 col-md-2">
        			<label>Password</label>
        		</div>
        		<div class="col-md-3">
        			<input type="text" name="password" id="password">
        		</div>			
        	</div>
        	</br>
        	<div class="row">
        		<div class="btn btn-info offset-md-3 col-md-6" onclick="login()">
					<strong class="h1">Login</strong>
        		</div>		
        	</div>
		</div>
       </div>
   </div>
</body>

<script src="async.js"></script>