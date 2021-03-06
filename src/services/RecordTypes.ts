export enum RecordTypes
{
  OSD = 0x01,
  HOME = 0x02,
  GIMBAL = 0x03,
  RC = 0x04,
  CUSTOM = 0x05,
  DEFORM = 0x06,
  CENTER_BATTERY = 0x07,
  SMART_BATTERY = 0x08,
  APP_TIP = 0x09,
  APP_WARN = 0x0A,
  RC_GPS = 0x0B,
  RC_DEBUG = 0x0C,
  RECOVER = 0x0D,
  APP_GPS = 0x0E,
  FIRMWARE = 0x0F,
  OFDM_DEBUG = 0x10,
  VISION_GROUP = 0x11,
  VISION_WARN = 0x12,
  MC_PARAM = 0x13,
  APP_OPERATION = 0x14,
  // What is record type = 0x16,? #####
  APP_SER_WARN = 0x18,
  // What is record type = 0x19,? #####
  // What is record type = 0x1a,? #####
  // What is record type = 0x1e,? #####
  // What is record type = 0x28,? #####
  JPEG = 0x39,
  OTHER = 0xFE,
}