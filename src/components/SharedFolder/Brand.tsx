

export const Brand: FC<BrandProps> = ({ isClickable, isWhite, }) => {
	if (isClickable) {
		return (
			<Link href={crmSite ? `${process.env.CRM_PUBLIC_URL}` : "/"}>
				<Image
                
					src={isWhite ? "/logo-white.svg" : "/logo.svg"}
					
					alt="HomeLeads"
				/>
			</Link>
		);
	}

	return <Image src={isWhite ? "/logo-white.svg" : "/logo.svg"} {...rest} alt="HomeLeads" />;
};

export interface BrandProps  {
	isClickable?: boolean;
	isWhite?: boolean;
}


