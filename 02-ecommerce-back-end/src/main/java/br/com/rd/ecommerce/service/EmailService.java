package br.com.rd.ecommerce.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service("EmailService")
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmailEsqueciSenha(String email, String senha) {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(email);

        msg.setSubject("Sua nova senha");
        msg.setText("Olá, \n\n Nós geramos uma senha aleatória para você. \n\n Sua nova senha é: " + senha);

        javaMailSender.send(msg);

    }
}
