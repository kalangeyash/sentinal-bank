import zod from 'zod'


const userZodSchema = zod.object({
    username : zod.string({required_error: "Username must be string"}).email({message:"Username must be a valid email"}).trim().min(3,{message:"Minimum 3 Characters"}).max(255,{message:"Maximum 255 Characters"}),                     
    password : zod.string({required_error: "Password must be string"}).trim().min(7,{message:"Minimum 7 Characters"}).max(255,{message:"Maximum 255 Characters"}),                     
    firstName : zod.string({required_error: "First Name must be string"}).trim().min(3,{message:"Minimum 3 Characters"}).max(255,{message:"Maximum 255 Characters"}),                     
    lastName : zod.string({required_error: "Last Name must be string"}).trim().min(3,{message:"Minimum 3 Characters"}).max(255,{message:"Maximum 255 Characters"})                     
})
export default userZodSchema
