import { Transfer as TransferEvent } from '../generated/GenesisAdventurer/GenesisAdventurer';
import { Adventurer, Mana, Order, Transfer, Wallet } from '../generated/schema';
import { GenesisAdventurer } from '../generated/GenesisAdventurer/GenesisAdventurer';
import { BigInt } from '@graphprotocol/graph-ts';



export function handleTransfer(event: TransferEvent): void {
  let fromAddress = event.params.from;
  let toAddress = event.params.to;
  let tokenId = event.params.tokenId;
  let fromId = fromAddress.toHex();
  let fromWallet = Wallet.load(fromId);
  let suffixArray = ["","Power","Giants",
    "Titans","Skill","Perfection",
    "Brilliance","Enlightenment","Protection",
    "Anger","Rage","Fury","Vitriol",
    "the Fox","Detection","Reflection",
    "the Twins"];

  if (!fromWallet) {
    fromWallet = new Wallet(fromId);
    fromWallet.address = fromAddress;
    fromWallet.joined = event.block.timestamp;
    fromWallet.adventurersHeld = BigInt.fromI32(0);
    fromWallet.save();
  } else {
    if (!isZeroAddress(fromId)) {
      fromWallet.adventurersHeld = fromWallet.adventurersHeld.minus(BigInt.fromI32(1));
      fromWallet.save();
    }
  }

  let toId = toAddress.toHex();
  let toWallet = Wallet.load(toId);
  if (!toWallet) {
    toWallet = new Wallet(toId);
    toWallet.address = toAddress;
    toWallet.joined = event.block.timestamp;
    toWallet.adventurersHeld = BigInt.fromI32(1);
    toWallet.save();
  } else {
    toWallet.adventurersHeld = toWallet.adventurersHeld.plus(BigInt.fromI32(1));
    toWallet.save();
  }

  let adventurer = Adventurer.load(tokenId.toString());
  if (adventurer != null) {
    adventurer.currentOwner = toWallet.id;
    adventurer.save();
  } else {
    let weaponTransfer = Transfer.load(
      event.transaction.hash.toHex() + '-' + event.logIndex.plus(BigInt.fromI32(2)).toString()
    ) as Transfer;
    let chestTransfer = Transfer.load(
      event.transaction.hash.toHex() + '-' + event.logIndex.plus(BigInt.fromI32(4)).toString()
    )as Transfer;
    let headTransfer = Transfer.load(
      event.transaction.hash.toHex() + '-' + event.logIndex.plus(BigInt.fromI32(6)).toString()
    )as Transfer;
    let waistTransfer = Transfer.load(
      event.transaction.hash.toHex() + '-' + event.logIndex.plus(BigInt.fromI32(8)).toString()
    )as Transfer;
    let footTransfer = Transfer.load(
      event.transaction.hash.toHex() + '-' + event.logIndex.plus(BigInt.fromI32(10)).toString()
    )as Transfer;
    let handTransfer = Transfer.load(
      event.transaction.hash.toHex() + '-' + event.logIndex.plus(BigInt.fromI32(12)).toString()
    )as Transfer;
    let neckTransfer = Transfer.load(
      event.transaction.hash.toHex() + '-' + event.logIndex.plus(BigInt.fromI32(14)).toString()
    )as Transfer;
    let ringTransfer = Transfer.load(
      event.transaction.hash.toHex() + '-' + event.logIndex.plus(BigInt.fromI32(16)).toString()
    )as Transfer;

    adventurer = new Adventurer(tokenId.toString());
    let contract = GenesisAdventurer.bind(event.address);
    adventurer.chest = contract.getChest(tokenId).toString();
    adventurer.foot = contract.getFoot(tokenId).toString();
    adventurer.hand = contract.getHand(tokenId).toString();
    adventurer.head = contract.getHead(tokenId).toString();
    adventurer.neck = contract.getNeck(tokenId).toString();
    adventurer.ring = contract.getRing(tokenId).toString();
    adventurer.waist = contract.getWaist(tokenId).toString();
    adventurer.weapon = contract.getWeapon(tokenId).toString();
    adventurer.order = contract.getOrder(tokenId).toString();
    adventurer.orderColor = contract.getOrderColor(tokenId).toString();
    adventurer.orderCount = contract.getOrderCount(tokenId).toString();
    adventurer.suffixId = suffixArray.indexOf(adventurer.order).toString();
    adventurer.currentOwner = toWallet.id;
    adventurer.minted = event.block.timestamp;
    adventurer.tokenURI = contract.tokenURI(tokenId);
    adventurer.weaponGM = weaponTransfer.mana as string;
    adventurer.chestGM = chestTransfer.mana as string;
    adventurer.headGM = headTransfer.mana as string;
    adventurer.waistGM = waistTransfer.mana as string;
    adventurer.footGM = footTransfer.mana as string;
    adventurer.handGM = handTransfer.mana as string;
    adventurer.neckGM = neckTransfer.mana as string;
    adventurer.ringGM = ringTransfer.mana as string;
    if (!isZeroAddress(fromId)) {
      adventurer.OGMinterAddress = toAddress;
    }
    adventurer.save();

    let order = Order.load(adventurer.suffixId);
    if (!order) {
      order = new Order(adventurer.suffixId);
      order.adventurersHeld = BigInt.fromI32(1);
      order.save();
    } else {
      order.adventurersHeld = order.adventurersHeld.plus(BigInt.fromI32(1));
      order.save();
    }
  }

  let transfer = new Transfer(
    event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  );

  transfer.adventurer = tokenId.toString();
  transfer.from = fromWallet.id;
  transfer.to = toWallet.id;
  transfer.txHash = event.transaction.hash;
  transfer.timestamp = event.block.timestamp;
  transfer.save();

}

function isZeroAddress(string: string): boolean {
  return string == '0x0000000000000000000000000000000000000000';
}
