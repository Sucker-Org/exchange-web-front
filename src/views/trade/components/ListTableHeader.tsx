import { Stack, Typography } from "@mui/material";

export const ListTableHeader = ({ headers }) => {
  const typographyStyle = {
    flex: "1 1",
    overflow: "hidden",
    textAlign: "right",
    textOverflow: "ellipsis"
  };

  return (
    <Stack
      direction="row"
      sx={{
        height: "20px",
        width: "100%",
        lineHeight: "20px",
        px: 1.5
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
