import { MutualFundList } from "./mutual-fund-details";
import { StockDetails } from "./stock-details";

export class PortFolioDetails {
    
    portFolioId:number;
    stockList: Array<StockDetails> = new Array<StockDetails>();
    mutualFundList:Array<MutualFundList> = new Array<MutualFundList>();

}
