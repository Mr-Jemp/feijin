document.addEventListener( "plusready",  function()
{
    var _BARCODE = 'MobMsm',
		B = window.plus.bridge;
    var MobMsm =
    {
		getVerificationCode : function (phone, successCallback, errorCallback )
		{
			var success = typeof successCallback !== 'function' ? null : function(args) 
			{
				successCallback(args);
			},
			fail = typeof errorCallback !== 'function' ? null : function(code) 
			{
				errorCallback(code);
			};
			var callbackID = B.callbackId(success, fail);

			return B.exec(_BARCODE, "getVerificationCode", [callbackID, phone]);
		},
		submitVerificationCode : function (code, successCallback, errorCallback )
		{
			var success = typeof successCallback !== 'function' ? null : function(args) 
			{
				successCallback(args);
			},
			fail = typeof errorCallback !== 'function' ? null : function(code) 
			{
				errorCallback(code);
			};
			var callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "submitVerificationCode", [callbackID, code]);
		}
    };
    window.plus.MobMsm = MobMsm;
}, true );