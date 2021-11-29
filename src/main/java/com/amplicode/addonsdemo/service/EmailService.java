package com.amplicode.addonsdemo.service;

import com.amplicode.addonsdemo.dto.SendEmailDto;
import com.amplicode.email.*;
import io.leangen.graphql.annotations.GraphQLArgument;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.charset.StandardCharsets;

@GraphQLApi
@Service
public class EmailService {

    @Autowired
    private Emailer emailer;

    @GraphQLMutation(name = "sendEmailAsync")
    @Transactional
    public void sendEmailAsync(@GraphQLArgument(name = "input") SendEmailDto input) {
        String att1 = "<html><body><h1>Attachment</h1></body></html>";
        EmailAttachment emailAtt = EmailAttachment.createTextAttachment(att1, StandardCharsets.UTF_8.name(), "attachment.html");
        EmailInfo emailInfo = EmailInfoBuilder.create(input.getAddress(), "New products", "<html><body><div>We are please to introduce " +
                        "you to more than 30 new products." +
                        " We are waiting for you on our website.</div></body></html>")
                .setAttachments(emailAtt)
                .build();
        emailer.sendEmailAsync(emailInfo);
    }
}
