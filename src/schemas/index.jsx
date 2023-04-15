import * as Yup from 'yup';


export const ContactSchemas = Yup.object({
  FirstName: Yup.string().min(2).max(25).required('Please enter  your first name'),
  LastName: Yup.string().min(2).max(25).required('Please enter  your last name'),
  addres: Yup.string().min(2).max(30).required('Please enter  your Adress'),
  city: Yup.string().min(2).max(15).required(' enter your city'),
  state: Yup.string().min(2).max(25).required('Select state'),
  zipcode: Yup.string().max(10).required('enter  your zipcode '),
  PhoneNumber: Yup.string().max(15).required('Please enter  your phoneNo. '),
  email: Yup.string().email().required('Please enter  your email'),
  service:  Yup.string().min(2).max(25).required('Select service'),
  speed:  Yup.string().min(2).max(25).required('Select speed'),
  comment: Yup.string().min(2).max(100).required('Please enter Comment'),
}
)

export const helpSchemas = Yup.object({
  name:Yup.string().min(2).max(25).required('Please enter  your name'),
  email:Yup.string().email().required('Please enter  your email'),
  phoneNumber: Yup.string().max(15).required('Please enter  your phoneNo. '),
  addres: Yup.string().min(2).max(30).required('Please enter  your Adress'),
  message: Yup.string().min(2).max(100).required('Please enter  message'),
})