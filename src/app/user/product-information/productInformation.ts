export interface p_informationModel{


    id:number;

    //    SenderVaiable
    p_senderName:string;

    p_senderPhone:string;
    p_senderAddress:string;
    p_senderBranch:string

    //    ReciverVariable
    p_ReceiverName:string;

    p_ReceiverPhone:string;
    p_ReceiverAddress:string;
    p_ReceiverBranch:string;

    //    courier item variable
    prodcuttype:string;
    productname:string;
    productweight:number;
    chargeAmount:number;
    paymentMethod:string;
    paymentStatus:string;
    userName:string;
    courierStatus:string;
    createdAt:Date;
    availableDate:Date;

}