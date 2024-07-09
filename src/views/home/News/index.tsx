/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:Home page news component
 */
import { Box, Typography, Grid, Card, Container, CardMedia, CardContent } from "@mui/material";
import ImgDemo from "@/assets/images/home/news-01.jpg";
import FallBackImg from "@/assets/images/fallback_image.png";
// mock data
const NewsContent = [
  {
    title: "Coinbase上市",
    description: "Coinbase上市，市值超过1000亿美元",
    image: "https://img1.baidu.com/it/u=2920000009,2920000009&fm=26&fmt=auto"
  },
  {
    title: "比特币暴涨",
    description: "比特币暴涨，一度突破6万美元",
    image: ImgDemo
  },
  {
    title: "以太坊涨势",
    description: "以太坊涨势，一度突破2000美元",
    image: ImgDemo
  }
];

const News = () => {
  const onMediaFallback = (e: any) => {
    e.target.src = FallBackImg;
  };
  return (
    <Box sx={{ py: 6, bgcolor: theme => (theme.palette.mode === "dark" ? "RGBA(16, 23, 34, 1)" : "#f0f0f0") }}>
      <Container maxWidth="lg">
        <Typography variant="h5" sx={{ mb: 3 }}>
          热点新闻
        </Typography>
        <Grid container spacing={5}>
          {NewsContent.map((item, index) => (
            <Grid item xs={4} key={index}>
              <Card
                sx={{
                  borderRadius: 1.5,
                  bgcolor: theme => (theme.palette.mode === "dark" ? "RGBA(19, 23, 27, 1)" : "#fff")
                }}
                variant="outlined"
              >
                <CardMedia component="img" onError={onMediaFallback} image={item.image} alt={item.title} sx={{ mb: 2 }} />
                <CardContent sx={{ px: 4 }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 1, mb: 3 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default News;
