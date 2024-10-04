// import sgMail from '@sendgrid/mail';
// import { NextResponse } from 'next/server';

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const {
//       fname,
//       name,
//       message,
//       lname,
//       email,
//       phone,
//       businessname,
//       industry,
//       estimatedannualrevenue,
//       dowehaveaccount,
//       howcanwehelp,
//       pageName,
//       secreteKey,        // Added for reCAPTCHA
//       gRecaptchaToken    // Added for reCAPTCHA
//     } = body.data;

//     let text = '';
//     if (fname || name) text += `Firstname: ${fname || name}\n`;
//     if (lname) text += `Lastname: ${lname}\n`;
//     if (email) text += `Email: ${email}\n`;
//     if (phone) text += `Phone: ${phone}\n`;
//     if (businessname) text += `Business Name: ${businessname}\n`;
//     if (industry) text += `Industry: ${industry}\n`;
//     if (estimatedannualrevenue) text += `Estimated Annual Revenue: ${estimatedannualrevenue}\n`;
//     if (dowehaveaccount) text += `CW Suite Account: ${dowehaveaccount}\n`;
//     if (howcanwehelp || message) text += `Query: ${howcanwehelp || message}\n`;

//     const newData = {
//       firstname: fname || null,
//       lastname: lname || null,
//       email: email || null,
//       phone: phone || null,
//       name: fname || null,
//       industry: industry || null,
//       estimatedAnnualRevenue: estimatedannualrevenue || null,
//       cwSuiteAccount: dowehaveaccount === "Yes" ? "Y" : "N",
//       userQuery: howcanwehelp || null,
//     };

//     // Google reCAPTCHA verification
//     // const reCaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/x-www-form-urlencoded',
//     //   },
//     //   body: `secret=${secreteKey}&response=${gRecaptchaToken}`,
//     // });

//     // const reCaptchaResult = await reCaptchaResponse.json();

//     // Check reCAPTCHA score
//     // if (reCaptchaResult?.score > 0.5) {
//       sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//       const msg = {
//         to: process.env.TO_EMAIL,
//         from: process.env.FROM_EMAIL,
//         subject: `${pageName}: Query sent by ${email}`,
//         text: text.trim(),
//       };

//       try {
//         await sgMail.send(msg);
//         return NextResponse.json({
//           status: "success",
//           message: "Enquiry submitted successfully",
//         }, { status: 200 });
//       } catch (error) {
//         console.error("Error sending email", error);
//         return NextResponse.json({
//           status: "failure",
//           message: "Error sending email",
//         }, { status: 500 });
//       }
//     } 
// //     else {
// //       return NextResponse.json({
// //         status: "failure",
// //         message: "Google reCAPTCHA verification failed",
// //       }, { status: 400 });
// //     }
// //   } 
// catch (error) {
//     return NextResponse.json({
//       status: "failure",
//       message: "Error submitting the enquiry form",
//     }, { status: 500 });
//   }
// }


import sgMail from '@sendgrid/mail';

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      fname,
      name,
      message,
      lname,
      email,
      phone,
      businessname,
      industry,
      estimatedannualrevenue,
      dowehaveaccount,
      howcanwehelp,
      pageName,
      secreteKey,        // Added for reCAPTCHA
      gRecaptchaToken    // Added for reCAPTCHA
    } = body.data;

    let text = '';
    if (fname || name) text += `Firstname: ${fname || name}\n`;
    if (lname) text += `Lastname: ${lname}\n`;
    if (email) text += `Email: ${email}\n`;
    if (phone) text += `Phone: ${phone}\n`;
    if (businessname) text += `Business Name: ${businessname}\n`;
    if (industry) text += `Industry: ${industry}\n`;
    if (estimatedannualrevenue) text += `Estimated Annual Revenue: ${estimatedannualrevenue}\n`;
    if (dowehaveaccount) text += `CW Suite Account: ${dowehaveaccount}\n`;
    if (howcanwehelp || message) text += `Query: ${howcanwehelp || message}\n`;

    const newData = {
      firstname: fname || null,
      lastname: lname || null,
      email: email || null,
      phone: phone || null,
      name: fname || null,
      industry: industry || null,
      estimatedAnnualRevenue: estimatedannualrevenue || null,
      cwSuiteAccount: dowehaveaccount === "Yes" ? "Y" : "N",
      userQuery: howcanwehelp || null,
    };

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: `${pageName}: Query sent by ${email}`,
      text: text.trim(),
    };

    try {
      const response = await sgMail.send(msg);
      console.log('Email sent:', response);

      return new Response(JSON.stringify({
        status: "success",
        message: "Enquiry submitted successfully",
        response: response, 
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error("Error sending email", error);
      return new Response(JSON.stringify({
        status: "failure",
        message: "Error sending email",
        error: error, 
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    console.error("Error processing request", error);
    return new Response(JSON.stringify({
      status: "failure",
      message: "Error submitting the enquiry form",
      error: error, // Optionally return the error
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
