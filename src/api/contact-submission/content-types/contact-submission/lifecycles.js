module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins['email'].services.email.send({
        to: 'ardon@roderbuilt.com', // Your email
        from: 'info@roderbuilt.com', // MUST be same as config
        replyTo: result.email, // Visitor's email
        subject: `Website Contact: ${result.subject}`,
        text: `${result.message} (From: ${result.name})`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
