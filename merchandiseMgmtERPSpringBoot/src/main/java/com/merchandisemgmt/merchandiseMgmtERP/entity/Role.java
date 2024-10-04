package com.merchandisemgmt.merchandiseMgmtERP.entity;

public enum Role {

    ADMIN , USER;


    public String getFriendlyName() {
        switch (this) {
            case ADMIN: return "Admin";
            case USER: return "user";
            default: throw new IllegalArgumentException();
        }
    }
}
