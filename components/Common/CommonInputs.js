import React from "react";
import { Form, Button, Message, TextArea, Divider } from "semantic-ui-react";

function CommonInputs({
  user: { bio, linkedin, portfolio, github, twitter },
  handleChange,
  showSocialLinks,
  setShowSocialLinks
}) {
  return (
    <>
      <Form.Field
        required
        control={TextArea}
        name="bio"
        value={bio}
        onChange={handleChange}
        placeholder="bio"
      />

      <Button
        content="Add Social Links"
        color="aqua"
        icon="at"
        type="button"
        onClick={() => setShowSocialLinks(!showSocialLinks)}
      />

      {showSocialLinks && (
        <>
          <Divider />
          <Form.Input
            icon="linkedin alternate"
            iconPosition="left"
            name="linkedin"
            value={linkedin}
            onChange={handleChange}
          />

          <Form.Input
            icon="twitter"
            iconPosition="left"
            name="twitter"
            value={twitter}
            onChange={handleChange}
          />

          <Form.Input
            icon="github"
            iconPosition="left"
            name="github"
            value={github}
            onChange={handleChange}
          />

          <Form.Input
            icon="certificate"
            iconPosition="left"
            name="portfolio"
            value={portfolio}
            onChange={handleChange}
          />

          <Message
            icon="attention"
            info
            size="small"
            header="Social Media Links Are Optional!"
          />
        </>
      )}
    </>
  );
}

export default CommonInputs;
