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

    this.set("itemName", Value.fromString(""));
    this.set("suffixId", Value.fromString(""));
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

  get lootTokenId(): string | null {
    let value = this.get("lootTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set lootTokenId(value: string | null) {
    if (!value) {
      this.unset("lootTokenId");
    } else {
      this.set("lootTokenId", Value.fromString(<string>value));
    }
  }

  get itemName(): string {
    let value = this.get("itemName");
    return value!.toString();
  }

  set itemName(value: string) {
    this.set("itemName", Value.fromString(value));
  }

  get suffixId(): string {
    let value = this.get("suffixId");
    return value!.toString();
  }

  set suffixId(value: string) {
    this.set("suffixId", Value.fromString(value));
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

export class Order extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("manasHeld", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Order entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Order entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Order", id.toString(), this);
    }
  }

  static load(id: string): Order | null {
    return changetype<Order | null>(store.get("Order", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
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
}

export class Bag extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("chest", Value.fromString(""));
    this.set("foot", Value.fromString(""));
    this.set("hand", Value.fromString(""));
    this.set("head", Value.fromString(""));
    this.set("neck", Value.fromString(""));
    this.set("ring", Value.fromString(""));
    this.set("waist", Value.fromString(""));
    this.set("weapon", Value.fromString(""));
    this.set("chestSuffixId", Value.fromI32(0));
    this.set("footSuffixId", Value.fromI32(0));
    this.set("handSuffixId", Value.fromI32(0));
    this.set("headSuffixId", Value.fromI32(0));
    this.set("neckSuffixId", Value.fromI32(0));
    this.set("ringSuffixId", Value.fromI32(0));
    this.set("waistSuffixId", Value.fromI32(0));
    this.set("weaponSuffixId", Value.fromI32(0));
    this.set("currentOwner", Value.fromString(""));
    this.set("minted", Value.fromBigInt(BigInt.zero()));
    this.set("manasClaimed", Value.fromBigInt(BigInt.zero()));
    this.set("manasUnclaimed", Value.fromBigInt(BigInt.zero()));
    this.set("manasTotalCount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Bag entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Bag entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Bag", id.toString(), this);
    }
  }

  static load(id: string): Bag | null {
    return changetype<Bag | null>(store.get("Bag", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get chest(): string {
    let value = this.get("chest");
    return value!.toString();
  }

  set chest(value: string) {
    this.set("chest", Value.fromString(value));
  }

  get foot(): string {
    let value = this.get("foot");
    return value!.toString();
  }

  set foot(value: string) {
    this.set("foot", Value.fromString(value));
  }

  get hand(): string {
    let value = this.get("hand");
    return value!.toString();
  }

  set hand(value: string) {
    this.set("hand", Value.fromString(value));
  }

  get head(): string {
    let value = this.get("head");
    return value!.toString();
  }

  set head(value: string) {
    this.set("head", Value.fromString(value));
  }

  get neck(): string {
    let value = this.get("neck");
    return value!.toString();
  }

  set neck(value: string) {
    this.set("neck", Value.fromString(value));
  }

  get ring(): string {
    let value = this.get("ring");
    return value!.toString();
  }

  set ring(value: string) {
    this.set("ring", Value.fromString(value));
  }

  get waist(): string {
    let value = this.get("waist");
    return value!.toString();
  }

  set waist(value: string) {
    this.set("waist", Value.fromString(value));
  }

  get weapon(): string {
    let value = this.get("weapon");
    return value!.toString();
  }

  set weapon(value: string) {
    this.set("weapon", Value.fromString(value));
  }

  get chestSuffixId(): i32 {
    let value = this.get("chestSuffixId");
    return value!.toI32();
  }

  set chestSuffixId(value: i32) {
    this.set("chestSuffixId", Value.fromI32(value));
  }

  get footSuffixId(): i32 {
    let value = this.get("footSuffixId");
    return value!.toI32();
  }

  set footSuffixId(value: i32) {
    this.set("footSuffixId", Value.fromI32(value));
  }

  get handSuffixId(): i32 {
    let value = this.get("handSuffixId");
    return value!.toI32();
  }

  set handSuffixId(value: i32) {
    this.set("handSuffixId", Value.fromI32(value));
  }

  get headSuffixId(): i32 {
    let value = this.get("headSuffixId");
    return value!.toI32();
  }

  set headSuffixId(value: i32) {
    this.set("headSuffixId", Value.fromI32(value));
  }

  get neckSuffixId(): i32 {
    let value = this.get("neckSuffixId");
    return value!.toI32();
  }

  set neckSuffixId(value: i32) {
    this.set("neckSuffixId", Value.fromI32(value));
  }

  get ringSuffixId(): i32 {
    let value = this.get("ringSuffixId");
    return value!.toI32();
  }

  set ringSuffixId(value: i32) {
    this.set("ringSuffixId", Value.fromI32(value));
  }

  get waistSuffixId(): i32 {
    let value = this.get("waistSuffixId");
    return value!.toI32();
  }

  set waistSuffixId(value: i32) {
    this.set("waistSuffixId", Value.fromI32(value));
  }

  get weaponSuffixId(): i32 {
    let value = this.get("weaponSuffixId");
    return value!.toI32();
  }

  set weaponSuffixId(value: i32) {
    this.set("weaponSuffixId", Value.fromI32(value));
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

  get manas(): Array<string> {
    let value = this.get("manas");
    return value!.toStringArray();
  }

  set manas(value: Array<string>) {
    this.set("manas", Value.fromStringArray(value));
  }

  get manasClaimed(): BigInt {
    let value = this.get("manasClaimed");
    return value!.toBigInt();
  }

  set manasClaimed(value: BigInt) {
    this.set("manasClaimed", Value.fromBigInt(value));
  }

  get manasUnclaimed(): BigInt {
    let value = this.get("manasUnclaimed");
    return value!.toBigInt();
  }

  set manasUnclaimed(value: BigInt) {
    this.set("manasUnclaimed", Value.fromBigInt(value));
  }

  get manasTotalCount(): BigInt {
    let value = this.get("manasTotalCount");
    return value!.toBigInt();
  }

  set manasTotalCount(value: BigInt) {
    this.set("manasTotalCount", Value.fromBigInt(value));
  }
}

export class Wallet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("address", Value.fromBytes(Bytes.empty()));
    this.set("manasHeld", Value.fromBigInt(BigInt.zero()));
    this.set("bagsHeld", Value.fromBigInt(BigInt.zero()));
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

  get bags(): Array<string> {
    let value = this.get("bags");
    return value!.toStringArray();
  }

  set bags(value: Array<string>) {
    this.set("bags", Value.fromStringArray(value));
  }

  get manasHeld(): BigInt {
    let value = this.get("manasHeld");
    return value!.toBigInt();
  }

  set manasHeld(value: BigInt) {
    this.set("manasHeld", Value.fromBigInt(value));
  }

  get bagsHeld(): BigInt {
    let value = this.get("bagsHeld");
    return value!.toBigInt();
  }

  set bagsHeld(value: BigInt) {
    this.set("bagsHeld", Value.fromBigInt(value));
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
    this.set("bag", Value.fromString(""));
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

  get bag(): string {
    let value = this.get("bag");
    return value!.toString();
  }

  set bag(value: string) {
    this.set("bag", Value.fromString(value));
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
