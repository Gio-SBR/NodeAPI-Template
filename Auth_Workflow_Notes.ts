/*
Create Standard Role
Can login but cannot see anything straight away as need to request permissions to see

Create Admin Role
Can login and add users to org, but also cant see anything as need to request permissions to see
*/

/*
Register
    Does user exist
        Yes
            Don't allow
        No
            Does org exist
                Yes
                    Create User in Auth.User table
                    Add User to Auth.UserRole table with Org Id and Standard Role
                    OR
                    Get owner to invite only??
                No
                    Create User in Auth.User table
                    Create Org in Auth.Organisation table with new user as Org Owner
                    Add User to Auth.UserRole table with Org Id and Admin Role
*/

/*
Login
    Does User exist and password is correct
        Yes
            Linked to Multiple Orgs
                Yes
                    Find first org and log in using those permissions for access tokens
                No
                    Find only org and log in using those permissions for access tokens
        No
            Don't allow
*/

/*
Switch Org
    Retrieve Org Id
    Retrieve permissions user has in org
    Use refresh token to get new access token using above info
*/

/*
Refresh Tokens
    Takes in org id and user permissions to create tokens
*/

/*
Logout
    Remove refresh token
*/

/*
Request Permissions - Org
    Only Org owner can request permissions
    Set by dev team in back end

    Retrieve org id 
        Does ResourceId exist
            Yes
                add permission to Auth.OrganisationResource table using Resource Id
            No
                Create new resource
                add permission to Auth.OrganisationResource table using Resource Id
*/

/*
Request Permissions - User
    Only Admins can change permissions
    Set by users in front end

    Retrieve user roles within this org from Auth.User table
        Does user already have permissions
            Yes
                Don't allow
            No
                Add role from Auth.Role table to Auth.UserRole table
*/

/*
Change available Permissions
    done by dev team in back end

    Add new permission to Auth.Permission
    Add permisson to roles(s) in Auth.RolePermission
*/

/*
Change store owner
    Only Store owner can transfer ownership
    Set by owner in front end
    User transfered to must be an admin
*/
