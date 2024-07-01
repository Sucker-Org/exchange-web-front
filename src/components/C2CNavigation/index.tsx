import { Box, Button, Container, Stack, SxProps, Theme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useC2CNavStore, NavActive, navItems } from "@/stores/modules/c2cNavStore";

export interface C2CNavigationProps {
  sx?: SxProps<Theme>;
}

const C2CNavigation: React.FC<C2CNavigationProps> = ({ sx }) => {
  const navigate = useNavigate();

  const { active, setActive } = useC2CNavStore();

  const handleChange = (value: NavActive, url: string) => {
    setActive(value);
    navigate(url);
  };

  const renderButton = (item: { label: string; value: NavActive; url: string }) => (
    <Button
      key={item.value}
      title={item.label}
      sx={{
        position: "relative",
        color: active === item.value ? "text.primary" : "text.secondary",
        "&:after": {
          content: '""',
          position: "absolute",
          display: "block",
          bottom: 0,
          width: "30%",
          height: 2,
          backgroundColor: active === item.value ? "primary.main" : "transparent"
        }
      }}
      onClick={() => handleChange(item.value, item.url)}
    >
      {item.label}
    </Button>
  );

  return (
    <Container
      maxWidth="xl"
      sx={{
        borderBottom: `1px solid`,
        borderColor: "divider",
        pt: 2,
        pb: 2,
        ...sx
      }}
    >
      <Stack spacing={{ xs: 1, sm: 2 }} justifyContent="space-between" direction="row" useFlexGap flexWrap="nowrap" px={0}>
        <Box>{navItems.slice(0, 2).map(renderButton)}</Box>
        <Box>{navItems.slice(2).map(renderButton)}</Box>
      </Stack>
    </Container>
  );
};

export default C2CNavigation;
