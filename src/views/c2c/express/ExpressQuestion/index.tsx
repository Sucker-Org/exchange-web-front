import { Accordion, AccordionDetails, AccordionSummary, Avatar, Container, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useState } from "react";

const avatarStyle = {
  bgcolor: "transparent",
  border: "1px solid",
  borderColor: "text.secondary",
  color: "text.primary",
  mr: 2,
  width: 32,
  height: 32,
  borderRadius: 1,
  fontSize: 16
};

interface AccordionComponentProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({ number, title, children }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{
        background: "none",
        boxShadow: "none"
      }}
    >
      <AccordionSummary
        expandIcon={expanded ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
        aria-controls={`panel-content-${number}`}
        id={`panel-header-${number}`}
        sx={{
          "&:hover": {
            bgcolor: "background.light",
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: "primary.main"
            }
          }
        }}
      >
        <Avatar sx={avatarStyle}>{number}</Avatar>
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails id={`panel-content-${number}`}>{children}</AccordionDetails>
    </Accordion>
  );
};

const faqs = [
  {
    title: "什么是C2C交易平台?",
    content:
      "借助灰度加密货币目录，轻松追踪最新的加密货币价格、成交量、热门竞争币和市值。点击币种，即可了解该币种的历史价格、24小时成交量以及比特币、以太币和BNB等币种的实时价格。"
  },
  {
    title: "黄金、铂金、钻石商家有什么不同?",
    content:
      "借助灰度加密货币目录，轻松追踪最新的加密货币价格、成交量、热门竞争币和市值。点击币种，即可了解该币种的历史价格、24小时成交量以及比特币、以太币和BNB等币种的实时价格。"
  },
  {
    title: "C2C快捷区可使用哪些数字货币?",
    content:
      "借助灰度加密货币目录，轻松追踪最新的加密货币价格、成交量、热门竞争币和市值。点击币种，即可了解该币种的历史价格、24小时成交量以及比特币、以太币和BNB等币种的实时价格。"
  },
  {
    title: "C2C交易相关问答？",
    content:
      "借助灰度加密货币目录，轻松追踪最新的加密货币价格、成交量、热门竞争币和市值。点击币种，即可了解该币种的历史价格、24小时成交量以及比特币、以太币和BNB等币种的实时价格。"
  },
  {
    title: "如何添加C2C交易收款方式?",
    content:
      "借助灰度加密货币目录，轻松追踪最新的加密货币价格、成交量、热门竞争币和市值。点击币种，即可了解该币种的历史价格、24小时成交量以及比特币、以太币和BNB等币种的实时价格。"
  },
  {
    title: "如何通过灰度C2C在本地购买比特币?",
    content:
      "借助灰度加密货币目录，轻松追踪最新的加密货币价格、成交量、热门竞争币和市值。点击币种，即可了解该币种的历史价格、24小时成交量以及比特币、以太币和BNB等币种的实时价格。"
  },
  {
    title: "为什么要选择灰度交易所进行C2C交易?",
    content:
      "借助灰度加密货币目录，轻松追踪最新的加密货币价格、成交量、热门竞争币和市值。点击币种，即可了解该币种的历史价格、24小时成交量以及比特币、以太币和BNB等币种的实时价格。"
  },
  {
    title: "C2C交易如何确保入金安全?",
    content:
      "借助灰度加密货币目录，轻松追踪最新的加密货币价格、成交量、热门竞争币和市值。点击币种，即可了解该币种的历史价格、24小时成交量以及比特币、以太币和BNB等币种的实时价格。"
  },
  {
    title: "C2C交易常见问题?",
    content:
      "借助灰度加密货币目录，轻松追踪最新的加密货币价格、成交量、热门竞争币和市值。点击币种，即可了解该币种的历史价格、24小时成交量以及比特币、以太币和BNB等币种的实时价格。"
  }
];

const ExpressQuestion = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: 6, fontWeight: 500 }}>
        交易常见问题
      </Typography>
      {faqs.map((faq, index) => (
        <AccordionComponent key={index} number={index + 1} title={faq.title}>
          <Typography variant="body2" color="#848E9C">
            {faq.content}
          </Typography>
        </AccordionComponent>
      ))}
    </Container>
  );
};

export default ExpressQuestion;
