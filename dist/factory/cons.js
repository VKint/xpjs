"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exchangeRateRepo = exports.tronListNft = exports.moralisNftList = exports.elrondNftList = void 0;
const crypto_exchange_rate_1 = require("crypto-exchange-rate");
const xpnet_nft_list_1 = require("xpnet-nft-list");
function elrondNftList(proxy) {
    return xpnet_nft_list_1.nftListRepo(xpnet_nft_list_1.elrdNftListService(proxy), xpnet_nft_list_1.elrdRawTokenMapper(), xpnet_nft_list_1.mockChainIdentMapper());
}
exports.elrondNftList = elrondNftList;
function moralisNftList(server, appId, moralisSecret) {
    return xpnet_nft_list_1.nftListRepo(xpnet_nft_list_1.moralisNftListService({ serverUrl: server, appId, moralisSecret }), xpnet_nft_list_1.moralisNftMapper(), xpnet_nft_list_1.moralisChainIdMapper());
}
exports.moralisNftList = moralisNftList;
function tronListNft(tronWeb, tronScan, xpnftAddr) {
    return xpnet_nft_list_1.nftListRepo(xpnet_nft_list_1.trxNftListService(tronWeb, tronScan, xpnftAddr), xpnet_nft_list_1.ethNftJMapper(), xpnet_nft_list_1.mockChainIdentMapper());
}
exports.tronListNft = tronListNft;
function exchangeRateRepo(baseUrl) {
    const baseService = crypto_exchange_rate_1.NetworkModel.batchExchangeRateService(baseUrl);
    return crypto_exchange_rate_1.cachedExchangeRateRepo(crypto_exchange_rate_1.networkBatchExchangeRateRepo(baseService, crypto_exchange_rate_1.NetworkModel.exchangeRateDtoMapper()));
}
exports.exchangeRateRepo = exchangeRateRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mYWN0b3J5L2NvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQTRIO0FBQzVILG1EQUE2UjtBQUk3UixTQUFnQixhQUFhLENBQUMsS0FBYTtJQUN2QyxPQUFPLDRCQUFXLENBQ2QsbUNBQWtCLENBQUMsS0FBSyxDQUFDLEVBQ3pCLG1DQUFrQixFQUFFLEVBQ3BCLHFDQUFvQixFQUFFLENBQ3pCLENBQUM7QUFDTixDQUFDO0FBTkQsc0NBTUM7QUFFRCxTQUFnQixjQUFjLENBQUMsTUFBYyxFQUFFLEtBQWEsRUFBRSxhQUFzQjtJQUNoRixPQUFPLDRCQUFXLENBQ2Qsc0NBQXFCLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUNsRSxpQ0FBZ0IsRUFBRSxFQUNsQixxQ0FBb0IsRUFBRSxDQUN6QixDQUFDO0FBQ04sQ0FBQztBQU5ELHdDQU1DO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLE9BQWdCLEVBQUUsUUFBZ0IsRUFBRSxTQUFpQjtJQUM3RSxPQUFPLDRCQUFXLENBQ2Qsa0NBQWlCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFDL0MsOEJBQWEsRUFBRSxFQUNmLHFDQUFvQixFQUFFLENBQ3pCLENBQUE7QUFDTCxDQUFDO0FBTkQsa0NBTUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxPQUFlO0lBQzVDLE1BQU0sV0FBVyxHQUFHLG1DQUFZLENBQUMsd0JBQXdCLENBQ3JELE9BQU8sQ0FDVixDQUFDO0lBRUYsT0FBTyw2Q0FBc0IsQ0FDekIsbURBQTRCLENBQ3hCLFdBQVcsRUFDWCxtQ0FBWSxDQUFDLHFCQUFxQixFQUFFLENBQ3ZDLENBQ0osQ0FBQztBQUNOLENBQUM7QUFYRCw0Q0FXQyJ9