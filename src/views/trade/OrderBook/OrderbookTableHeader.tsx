import { Stack, Typography } from "@mui/material";

export const OrderbookTableHeader = () => {
  const typographyStyle = {
    flex: "1 1",
    overflow: "hidden",
    textAlign: "right",
    textOverflow: "ellipsis"
  };

  const headers = [
    { title: "价格(USDT)", align: "left" },
    { title: "数量(BTC)", align: "right" },
    { title: "成交额", align: "right" }
  ];

  return (
    <Stack
      direction="row"
      sx={{
        height: "20px",
        width: "100%",
        lineHeight: "20px",
        px: 1
      }}
    >
      {headers.map((header, index) => (
        <Typography
          key={index}
          variant="caption"
          color="text.grey"
          sx={{
            ...typographyStyle,
            textAlign: header.align
          }}
        >
          {header.title}
        </Typography>
      ))}
    </Stack>
  );
};
