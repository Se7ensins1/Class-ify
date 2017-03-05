import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;

public class Mailer{

    public static void mail(String to, String sub, String msg) {
        send(to, sub, msg);
    }

    public static void text(String number, String sub, String msg, String service) {
        String to = "";
        if (service.equals("att")) {
            to = number + "@txt.att.net";
        } else if (service.equals("tmobile")) {
            to = number + "@tmomail.net";
        } else if (service.equals("verizon")) {
            to = number + "@vtext.com";
        } else if (service.equals("sprint")) {
            to = number + "@pm.sprint.com";
        } else if (service.equals("virginmobile")) {
            to = number + "@vmobl.com";
        } else if (service.equals("metropcs")) {
            to = number + "@mymetropcs.com";
        } else if (service.equals("boostmobile")) {
            to = number + "@myboostmobile.com";
        } else if (service.equals("cricket")) {
            to = number + "@mms.cricketwireless.net";
        } else if (service.equals("ting")) {
            to = number + "@message.ting.com";
        } else {
            throw new RuntimeException("service not found");
        }
        send(to, sub, msg);
    }

    public static void send(String to,String sub,String msg){
        //Get properties object
        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.socketFactory.port", "465");
        props.put("mail.smtp.socketFactory.class",
                "javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.port", "465");

        //get Session
        Session session = Session.getDefaultInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication("class.ify510@gmail.com", "hacktech2017");
                    }
                });

        //compose message
        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress("class.ify510@gmail.com"));
            message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
            message.setSubject(sub);
            message.setText(msg);
            //send message
            Transport.send(message);
            System.out.println("message sent successfully");
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}