# Get All Users
* (GET) http://localhost:5001/api/auth/users


# Register 
* (POST) http://localhost:5001/api/auth/users
> {"name":"Nikita","email":"nikki@gmail.com","password":"12345678","phone":7876543210,"role?":"Admin"}

# login
* (POST) http://localhost:5001/api/auth/login
> {"email":"nikki@gmail.com","password":"12345678"}

# UserInfo
* (GET) http://localhost:5001/api/auth/userInfo
> headers: {'x-access-token':token}
