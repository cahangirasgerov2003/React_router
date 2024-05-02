import { Form, redirect, useActionData } from "react-router-dom";

function Home() {
    const errors = useActionData();
    return (
        <div className="contact">
            <h2>Contact us !</h2>
            <Form method="post" action="/help/contact">
                <div>
                   <label htmlFor="email">Email:</label>
                   <input type="text" name="email" />
                   { errors?.emailError && <small>{errors.emailError}</small> }
                </div>
                <div>
                   <label htmlFor="message">Message:</label>
                   <textarea name="message"></textarea>
                   { errors?.messageError && <small>{errors.messageError}</small> }
                </div>

                <button type="submit">Submit</button>
            </Form>
        </div>
    );
}

export default Home;

// Bu server hissesine getmir tarayicida saxlanilir :

export const contactAction = async ( { request } ) => {
   const inputData = await request.formData();
   const email = inputData.get("email");
   const message = inputData.get("message");

   const errorsMessage = {
     emailError : null,
     messageError : null
   };

   if( typeof email !== "string" || !email.includes("@")){
      errorsMessage.emailError = "A typo has been detected in the email !";
   }else{
    errorsMessage.emailError=null;
   }

   if(typeof message !== "string" || message.length <= 20){
    errorsMessage.messageError = "A minimum of 20 characters is provided for the message !";
   }else{
    errorsMessage.messageError = null;
   }


   if(errorsMessage.emailError || errorsMessage.messageError){
       return errorsMessage;
   }

   // await sendMessage(email, message); Meselen firebase uzerine yollaya bilerik

   return redirect("/");
}
