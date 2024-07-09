import {
  Box,
  IconButton,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import EqualizerIcon from "@mui/icons-material/Equalizer";

import { useNavigate } from "react-router-dom";
import { TRADE_SPOT_URL } from "@/config";
import { Favorite } from "@/components/Favorite";
import { memo } from "react";
import RateText from "@/components/RateText";

const TableHeader = memo(({ showHighLow }: { showHighLow?: boolean }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell width={140}>名称</TableCell>
        <TableCell align="right">价格</TableCell>
        <TableCell align="right">涨跌</TableCell>
        <TableCell align="right">24h成交量</TableCell>
        {showHighLow && <TableCell align="right">24h最高/24h最低</TableCell>}
        <TableCell align="right">市值</TableCell>
        <TableCell align="right">操作</TableCell>
      </TableRow>
    </TableHead>
  );
});

const RowItemStyle = {
  cursor: "pointer",
  "&:hover": {
    background: "background.light"
  },
  "& .MuiTableCell-root": {
    color: "text.hint",
    borderBottom: "none"
  }
};
type RowItemProps = {
  name: string; //名称
  unit: string; //计价货币
  price: string; //价格
  rate: number; //涨跌幅
  volume: string; //成交量
  hight?: string; //24h最高
  low?: string; //24h最低
  marketCap: string; //市值
  showHighLow?: boolean;
};
const RowItem = ({ name, unit, price, rate, volume, marketCap, showHighLow, hight = "--", low = "--" }: RowItemProps) => {
  const navigate = useNavigate();
  return (
    <TableRow
      hover
      tabIndex={-1}
      sx={RowItemStyle}
      onClick={() => {
        navigate(`${TRADE_SPOT_URL}?symbol=${name}_${unit}`);
      }}
    >
      <TableCell>
        <Favorite symbol={name} unit={unit} />
      </TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="right">
        <RateText rate={rate} />
      </TableCell>
      <TableCell align="right">{volume}</TableCell>
      {showHighLow && (
        <TableCell align="right">
          {hight} / {low}
        </TableCell>
      )}
      <TableCell align="right">{marketCap}</TableCell>
      <TableCell align="right">
        <IconButton
          aria-label="trade"
          sx={{
            color: "text.secondary",
            "&:hover": {
              color: "primary.main"
            }
          }}
        >
          <EqualizerIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

interface RankingTableProps {
  //是否显示24小时最高/最低
  showHighLow?: boolean;
  tableData: RowItemProps[];
}
export const RankingTable: React.FC<RankingTableProps> = ({ showHighLow, tableData }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, background: "none" }}>
        <TableContainer>
          <Table
            sx={{
              minWidth: 750,
              "& .MuiTableCell-root": {
                color: "text.secondary",
                borderBottom: "none"
              }
            }}
            aria-labelledby="tableTitle"
          >
            <TableHeader showHighLow={showHighLow} />
            <TableBody>
              {tableData.map((item, index) => (
                <RowItem key={index} {...item} showHighLow={showHighLow} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" justifyContent="right" p={2}>
          <Pagination size="small" shape="rounded" count={10} page={1} boundaryCount={2} />
        </Box>
      </Paper>
    </Box>
  );
};
