import { Avatar, Box, Container, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import StepImg from "@/assets/images/trade/step.png";
import React from "react";
import { PaymentMethods } from "../PaymentMethods";

const avatarStyle = {
  bgcolor: "transparent",
  border: "1px solid",
  borderColor: "text.secondary",
  color: "primary.main"
};

const steps = [
  { primary: "创建账户", secondary: "使用您的手机号码或者邮箱注册灰度交易所。" },
  { primary: "KYC认证", secondary: "通过上传所需要的身份证件来验证您的信息，我们会用很短的时间进行审核。" },
  { primary: "添加付款方式", secondary: "添加与你实名信息一致的支付方式，我们支持银联、支付宝、微信。" },
  { primary: "购买加密货币", secondary: "现在你可以在灰度交易所内快速使用法币进行交易啦。" }
];

const StepDesc = () => {
  return (
    <Container maxWidth="lg">
      <Stack justifyContent="center" alignItems="center" spacing={10} direction={"row"}>
        <img src={StepImg} alt="Step" width={409} height={490} />
        <Box>
          <Typography variant="h4" gutterBottom>
            简单几步就可以购买加密货币
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" mb={6}>
            在灰度交易所上可以安全放心的购买加密货币。以下是您在灰度上购币的流程：
          </Typography>
          <List sx={{ width: "100%" }}>
            {steps.map((step, index) => (
              <ListItem
                key={index}
                alignItems="flex-start"
                sx={{
                  mb: 4
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={avatarStyle}>{index + 1}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={step.primary}
                  secondary={
                    index === 2 ? (
                      <React.Fragment>
                        {"添加与你实名信息一致的支付方式，我们支持"}
                        <PaymentMethods gap={1} />
                      </React.Fragment>
                    ) : (
                      step.secondary
                    )
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Stack>
    </Container>
  );
};

export default StepDesc;
