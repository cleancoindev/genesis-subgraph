// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Mana extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("lootTokenId", Value.fromBigInt(BigInt.zero()));
    this.set("itemName", Value.fromString(""));
    this.set("suffixId", Value.fromI32(0));
    this.set("inventoryId", Value.fromI32(0));
    this.set("currentOwner", Value.fromString(""));
    this.set("minted", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Mana entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Mana entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Mana", id.toString(), this);
    }
  }

  static load(id: string): Mana | null {
    return changetype<Mana | null>(store.get("Mana", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get lootTokenId(): BigInt {
    let value = this.get("lootTokenId");
    return value!.toBigInt();
  }

  set lootTokenId(value: BigInt) {
    this.set("lootTokenId", Value.fromBigInt(value));
  }

  get itemName(): string {
    let value = this.get("itemName");
    return value!.toString();
  }

  set itemName(value: string) {
    this.set("itemName", Value.fromString(value));
  }

  get suffixId(): i32 {
    let value = this.get("suffixId");
    return value!.toI32();
  }

  set suffixId(value: i32) {
    this.set("suffixId", Value.fromI32(value));
  }

  get inventoryId(): i32 {
    let value = this.get("inventoryId");
    return value!.toI32();
  }

  set inventoryId(value: i32) {
    this.set("inventoryId", Value.fromI32(value));
  }

  get currentOwner(): string {
    let value = this.get("currentOwner");
    return value!.toString();
  }

  set currentOwner(value: string) {
    this.set("currentOwner", Value.fromString(value));
  }

  get minted(): BigInt {
    let value = this.get("minted");
    return value!.toBigInt();
  }

  set minted(value: BigInt) {
    this.set("minted", Value.fromBigInt(value));
  }
}

export class Wallet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("address", Value.fromBytes(Bytes.empty()));
    this.set("manasHeld", Value.fromBigInt(BigInt.zero()));
    this.set("joined", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Wallet entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Wallet entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Wallet", id.toString(), this);
    }
  }

  static load(id: string): Wallet | null {
    return changetype<Wallet | null>(store.get("Wallet", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get manas(): Array<string> {
    let value = this.get("manas");
    return value!.toStringArray();
  }

  set manas(value: Array<string>) {
    this.set("manas", Value.fromStringArray(value));
  }

  get manasHeld(): BigInt {
    let value = this.get("manasHeld");
    return value!.toBigInt();
  }

  set manasHeld(value: BigInt) {
    this.set("manasHeld", Value.fromBigInt(value));
  }

  get joined(): BigInt {
    let value = this.get("joined");
    return value!.toBigInt();
  }

  set joined(value: BigInt) {
    this.set("joined", Value.fromBigInt(value));
  }
}

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("mana", Value.fromString(""));
    this.set("from", Value.fromString(""));
    this.set("to", Value.fromString(""));
    this.set("txHash", Value.fromBytes(Bytes.empty()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Transfer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Transfer", id.toString(), this);
    }
  }

  static load(id: string): Transfer | null {
    return changetype<Transfer | null>(store.get("Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get mana(): string {
    let value = this.get("mana");
    return value!.toString();
  }

  set mana(value: string) {
    this.set("mana", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value!.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}
